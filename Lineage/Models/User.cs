using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Lineage.Models
{
    public class User
    {
        public int UserID { get; set; }
        public string UserLogin { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string RegistrationDate { get; set; }
        
    }
}