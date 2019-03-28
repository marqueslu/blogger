using FluentValidator;
using FluentValidator.Validation;
using System;
using System.Collections.Generic;
using System.Text;

namespace blogger.domain.ValueObjects
{
    public class Name : Notifiable
    {
        public Name(string firstName, string lastName)
        {
            FirstName = firstName;
            LastName = lastName;

            AddNotifications(new ValidationContract()
                .Requires()
                .HasMinLen(FirstName, 3, "First Name", "The First Name must have a minimum of 3 characters")
                .HasMaxLen(FirstName, 40, "First Name", "The First Name must have a maximum of 30 characters")
                .HasMinLen(LastName, 3, "Last Name", "The Last Name must have a minimum of 3 characters")
                .HasMaxLen(LastName, 40, "Last Name", "The Last Name must have a maximum of 30 characters"));
        }


        public string FirstName { get; set; }
        public string LastName { get; set; }

        public override string ToString()
        {
            return FirstName + LastName;
        }
    }
}
