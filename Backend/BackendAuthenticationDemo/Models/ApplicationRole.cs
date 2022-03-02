using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendAuthenticationDemo.Models;

public class ApplicationRole : IdentityRole<Guid>
{
    public string Description { get; set; } = string.Empty;

    [NotMapped]
    public virtual ICollection<ApplicationUserRole>? UserRoles { get; set; }

    [NotMapped]
    public virtual ICollection<ApplicationUser> Users { get; set; } = new List<ApplicationUser>();
}