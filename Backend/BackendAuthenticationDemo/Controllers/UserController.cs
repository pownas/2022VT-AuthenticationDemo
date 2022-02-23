using BackendAuthenticationDemo.Dtos;
using BackendAuthenticationDemo.Interfaces;
using BackendAuthenticationDemo.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BackendAuthenticationDemo.Controllers;

[Route("api/[controller]")]
[Authorize]
public class UserController : ControllerBase
{
    private IUnitOfWork _uow { get; set; }

    public UserController(IUnitOfWork uow)
    {
        _uow = uow;
    }



    [HttpGet]
    [Authorize(Roles = $"SystemAdmin, Administrator")]
    public async Task<ActionResult<IEnumerable<UserDto>>> GetAll()
    {
        var listOfUsers = await _uow.ApplicationUsers.GetAllAsync(i => i.Roles);

        var userDtosToReturn = from u in listOfUsers
                               select new UserDto()
                               {
                                   Id = u.Id,
                                   UserName = u.UserName,
                                   GivenName = u.GivenName,
                                   Surname = u.Surname,
                                   Roles = (from r in u.Roles select r.Name).ToList()
                               };
        return Ok(userDtosToReturn);
    }



    [HttpPost]
    [Authorize(Roles = $"SystemAdmin")]
    public async Task<ActionResult<bool>> CreateUser(RegisterDto dto)
    {
        try
        {
            if (ModelState.IsValid)
            {
                var model = new ApplicationUser()
                {
                    Id = Guid.NewGuid(),
                    UserName = $"{dto.UserName}",
                    NormalizedUserName = $"{dto.UserName}".ToUpper(),
                    Email = $"{dto.Email}",
                    NormalizedEmail = $"{dto.Email}".ToUpper(),
                    ConcurrencyStamp = Guid.NewGuid().ToString(),
                    EmailConfirmed = true,
                    PasswordHash = new PasswordHasher<ApplicationUser>().HashPassword(null, $"{dto.Password}"),
                    GivenName = $"{dto.GivenName}",
                    Surname = $"{dto.Surname}"
                };

                await _uow.ApplicationUsers.AddAsync(model);
                await _uow.SaveChangesAsync();

                return Ok(true);
            }
            return BadRequest(dto);
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
            return BadRequest(false);
        }
    }



    [HttpGet, Route("{userId}")]
    public async Task<ActionResult<UserDto>> GetUserInfo(Guid userId)
    {
        var model = await _uow.ApplicationUsers.GetAllUserInfoById(userId);
        var dto = MapModelToDto(model);
        return Ok(dto);
    }



    public static UserDto MapModelToDto(ApplicationUser model)
    {
        List<string> userRoles = new List<string>();
        foreach (var role in model.UserRoles)
        {
            if (role.Role != null)
                userRoles.Add(role.Role.Name);
        }

        return new UserDto()
        {
            Id = model.Id,
            GivenName = model.GivenName,
            Surname = model.Surname,
            UserName = model.UserName,
            Roles = userRoles
        };
    }
}