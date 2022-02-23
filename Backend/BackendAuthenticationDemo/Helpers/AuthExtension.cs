namespace BackendAuthenticationDemo.Helpers;

public static class AuthExtension
{
    /// <summary>
    /// Extension-method in "./Helpers/AuthExtension.cs" to HttpContext, that gets the UserId from the logged in user.
    /// </summary>
    /// <param name="httpContext">Extends HttpContext</param>
    /// <returns>Guid UserId</returns>
    public static Guid GetUserId(this HttpContext httpContext)
    {
        if (httpContext.User == null)
        {
            return Guid.Empty;
        }

        var userId = Guid.Parse(httpContext.User.Claims.Single(x => x.Type == "iss").Value);
        return userId;
    }
}