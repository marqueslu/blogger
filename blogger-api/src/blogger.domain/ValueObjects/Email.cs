using FluentValidator;
using FluentValidator.Validation;
using System;
using System.Collections.Generic;
using System.Text;

namespace blogger.domain.ValueObjects
{
    public class Email : Notifiable
    {
        public Email(string address)
        {
            Address = address;

            AddNotifications(new ValidationContract()
                .Requires()
                .IsEmail(Address, "Email", "This is not a valid email")
            );
        }

        public string Address { get; set; }
    }
}
