using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendAuthenticationDemo.Models;

public class ApplicationUser : IdentityUser<Guid>
{
    public string GivenName { get; set; } = string.Empty;
    public string Surname { get; set; } = string.Empty;

    public virtual ICollection<ApplicationRole> Roles { get; set; } = new List<ApplicationRole>();

    [NotMapped]
    public virtual ICollection<ApplicationUserRole> UserRoles { get; set; } = new List<ApplicationUserRole>();
}