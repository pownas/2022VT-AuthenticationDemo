namespace BackendAuthenticationDemo.Dtos;

public class UserDto
{
    public Guid Id { get; set; } = Guid.Empty;
    public string UserName { get; set; } = string.Empty;
    public string GivenName { get; set; } = string.Empty;
    public string Surname { get; set; } = string.Empty;
    public List<string> Roles { get; set; } = new List<string>();
}
