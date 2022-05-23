using BackendAuthenticationDemo.Dtos;
using BackendAuthenticationDemo.Helpers;
using BackendAuthenticationDemo.Interfaces;
using BackendAuthenticationDemo.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BackendAuthenticationDemo.Controllers;

[ApiController, Route("api/[controller]")]
public class AuthenticationController : ControllerBase
{
    private readonly IUnitOfWork _uow;
    private readonly IConfiguration _config;

    public AuthenticationController(IUnitOfWork uow, IConfiguration configuration)
    {
        _uow = uow;
        _config = configuration;
    }

    [HttpPost, Route("Login")]
    public async Task<ActionResult<string>> LoginAsync(LoginDto dto)
    {
        if (ModelState.IsValid)
        {
            ApplicationUser user = await _uow.ApplicationUsers.Login(dto);
            if (user.UserName == "User not found")
                return NotFound(user.UserName);
            if (user.UserName == "Wrong password")
                return BadRequest(user.UserName);

            var jwtToken = await CreateApiToken(user);
            return Ok(jwtToken);
        }

        return BadRequest(dto);
    }

    #region GetLoggedInUser()
    [HttpGet, Route("GetLoggedInUser")]
    [Authorize]
    public async Task<ActionResult> GetLoggedInUser()
    {
        try
        {
            var userId = HttpContext.GetUserId();

            if (userId == Guid.Empty)
                return NotFound();

            var user = await _uow.ApplicationUsers.GetAllUserInfoById(userId);
            var roles = new List<string>();

            if (user.Roles != null)
                foreach (var role in user.Roles)
                    roles.Add(role.Name);


            var userDto = new UserDto()
            {
                Id = userId,
                UserName = user.UserName,
                GivenName = user.GivenName,
                Surname = user.Surname,
                Roles = roles
            };

            return Ok(userDto);
        }
        catch (Exception)
        {
            return Unauthorized();
        }
    }
    #endregion

    private async Task<string> CreateApiToken(ApplicationUser user)
    {
        var claims = new List<Claim>
        {
            new Claim(JwtRegisteredClaimNames.GivenName, user.GivenName)
        };

        var userRoles = await _uow.ApplicationRoles.GetRolesForUser(user.Id);

        if (userRoles.Any())
            foreach (var role in userRoles)
                claims.Add(new Claim(ClaimTypes.Role, role.Name));

        var systemSecretKey = _config.GetSection("AppSettings:SystemSecretKey").Value; //System secret key, from appsettings.json
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(systemSecretKey));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
        var token = new JwtSecurityToken(
            signingCredentials: credentials, //"Header" (security algoritm) and "Signature" (signed with SystemSecretKey)
            //"Payload" (data) below
            issuer: user.Id.ToString(), //Issued by user id
            claims: claims, //List of all user claims, GivenName + Roles
            expires: DateTime.Now.AddMinutes(15) //If a user token shall be valid 15 minutes
        );
        var jwtJsonWebToken = new JwtSecurityTokenHandler().WriteToken(token);

        return jwtJsonWebToken;
    }
}
