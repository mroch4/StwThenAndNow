using Microsoft.AspNetCore.Components;
using ThenAndNow.Constants;
using ThenAndNow.Enums;

namespace ThenAndNow.Pages
{
    [Route(Routes.Contact)]
    public partial class Contact
    {
        public static readonly SocialMediaType[] SocialButtons =
        [
            SocialMediaType.MailToAuthor,
            SocialMediaType.Flickr,
            SocialMediaType.GitHub
        ];
    }
}