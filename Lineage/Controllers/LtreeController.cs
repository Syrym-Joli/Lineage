using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Lineage.Controllers
{
    public class LtreeController : Controller
    {
        [Authorize]
        public ActionResult Index()
        {
            return View();
        }
    }
}