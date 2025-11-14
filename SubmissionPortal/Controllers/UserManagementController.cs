using Microsoft.AspNetCore.Mvc;

namespace SubmissionPortal.Controllers
{
	public class UserManagementController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}
