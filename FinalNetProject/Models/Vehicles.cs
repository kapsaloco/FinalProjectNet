using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FinalNetProject.models
{
    [Table("vehicles")]
    public class Vehicles
    {
        [Key]
        public int Id { get; set; }
        public string brand { get; set; }
        public string vin { get; set; }
        public string color { get; set; }
        public int year { get; set; }
        public int owner_id { get; set; }
    }
}