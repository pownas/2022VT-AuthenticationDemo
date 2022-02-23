using Microsoft.AspNetCore.Mvc;

namespace BackendAuthenticationDemo.Controllers
{
    public class AuthenticationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
