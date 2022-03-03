using System.ComponentModel.DataAnnotations;

namespace BackendAuthenticationDemo.Dtos;

public class LoginDto
{
    [Required]
    [MinLength(2)]
    public string UserName { get; set; } = string.Empty;

    [Required]
    [MinLength(8)]
    public string Password { get; set; } = string.Empty;
}