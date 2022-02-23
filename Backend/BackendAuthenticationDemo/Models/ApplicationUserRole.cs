using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendAuthenticationDemo.Models;

public class ApplicationUserRole : IdentityUserRole<Guid>
{
    [NotMapped]
    public virtual ApplicationUser? User { get; set; }

    [NotMapped]
    public virtual ApplicationRole? Role { get; set; }

    public DateTime DateRoleAdded { get; set; } = DateTime.Now;
}