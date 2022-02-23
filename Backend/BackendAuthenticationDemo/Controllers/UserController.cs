using Microsoft.AspNetCore.Mvc;

namespace BackendAuthenticationDemo.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
