using Microsoft.AspNetCore.Mvc;

namespace SubmissionPortal.Controllers
{
	public class DashboardController : Controller
	{
		public IActionResult Index()
		{
			ViewData["Title"] = "Dashboard";
			return View();
		}

		public IActionResult Error()
		{
			return View();
		}
	}
}
