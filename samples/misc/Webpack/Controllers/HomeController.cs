using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Webpack.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index(string name = "Some predifined param")
        {
            return View(new SampleModel
            {
                Bar = name,
                Foo = "hardcoded value"
            });
        }
    }

    public class SampleModel
    {
        public string Foo { get; set; }
        public string Bar { get; set; }
    }
}
