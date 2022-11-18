using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FinalNetProject.models
{
    [Table("claims")]
    public class Claims
    {
        [Key]
        public int Id { get; set; }
        public string description { get; set; }
        public string status { get; set; }
        public string date { get; set; }
        public int vehicle_id { get; set; }

    }
}