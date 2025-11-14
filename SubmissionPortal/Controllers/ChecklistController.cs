using Microsoft.AspNetCore.Mvc;

namespace SubmissionPortal.Controllers
{
	public class ChecklistController : Controller
	{
		public IActionResult Index()
		{
			ViewData["Title"] = "Checklist Setup";
			return View();
		}
	}
}
