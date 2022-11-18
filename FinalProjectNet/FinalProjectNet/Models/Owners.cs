using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace FinalProjectNet.Models
{
    [Table("owners")]
    public class Owners
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("id", TypeName = "uuid")]
        public Guid Id { get; set; }
        [Column("firstname")]
        public string firstName { get; set; }
        [Column("lastname")]
        public string lastName { get; set; }
        [Column("driverlicense")]
        public string driverLicense { get; set; }
        [ForeignKey("owner_id")]
        public List<Vehicles> Vehicles { get; set; }

        public Owners() { }

        public Owners(Guid id, string firstName, string lastName, string driverLicense, List<Vehicles> vehicles)
        {
            Id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.driverLicense = driverLicense;
            Vehicles = vehicles;
        }
    }
}
