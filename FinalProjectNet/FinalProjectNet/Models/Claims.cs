using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FinalProjectNet.Models
{
    [Table("claims")]
    public class Claims
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("id", TypeName = "uuid")]
        public Guid Id { get; set; }
        [Column("description")]
        public string description { get; set; }
        [Column("status")]
        public string status { get; set; }
        [Column("date")]
        public DateTime date { get; set; }
        [Column("vehicle_id", TypeName = "uuid")]
        public Guid vehicle_id { get; set; }



        public Claims() { }

        public Claims(Guid id, string description, string status, DateTime date)
        {
            Id = id;
            this.description = description;
            this.status = status;
            this.date = date;
        }
    }
}