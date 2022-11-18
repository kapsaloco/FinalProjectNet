using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Npgsql.Internal.TypeHandlers;

namespace FinalProjectNet.Models
{
    [Table("vehicles")]
    public class Vehicles
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("id", TypeName = "uuid")]
        public Guid Id { get; set; }
        [Column("brand")]
        public string brand { get; set; }
        [Column("vin")]
        public string vin { get; set; }
        [Column("color")]
        public string color { get; set; }
        [Column("year")]
        public int year { get; set; }

        [Column("owner_id", TypeName = "uuid")]
        public Guid owner_id { get; set; }

        [ForeignKey("vehicle_id")]
        public List<Claims> claims { get; set; }



        public Vehicles() { }

        public Vehicles(Guid id, string brand, string vin, string color, int year, List<Claims> claims)
        {
            Id = id;
            this.brand = brand;
            this.vin = vin;
            this.color = color;
            this.year = year;
            this.claims = claims;
        }
    }
}
