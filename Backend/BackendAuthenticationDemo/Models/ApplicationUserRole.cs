using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendAuthenticationDemo.Models;

public class ApplicationUserRole : IdentityUserRole<Guid>
{
    public DateTime DateRoleAdded { get; set; } = DateTime.Now;
}