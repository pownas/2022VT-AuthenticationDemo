using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace BackendAuthenticationDemo.Dtos;

public class LoginDto
{
    [Required]
    [DefaultValue("system")]
    public string UserName { get; set; } = string.Empty;

    [Required]
    [DefaultValue("DemoPassword1!")]
    public string Password { get; set; } = string.Empty;
}
