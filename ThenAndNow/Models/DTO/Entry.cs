using System.Text.Json.Serialization;

namespace ThenAndNow.Models.DTO
{
    public class Entry : EntryDTO
    {
        [JsonIgnore]
        public string Description { get; set; }

        [JsonIgnore]
        public string[] Tags { get; set; }
    }
}
