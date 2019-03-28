using blogger.domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace blogger.tests.ValueObjectsTests
{
    public class EmailTest
    {
        private Email validEmail;
        private Email invalidEmail;
        public EmailTest()
        {
            validEmail = new Email("lucas@teste.com");
            invalidEmail = new Email("lucas.com");
        }
        [Fact]
        public void Should_Not_Return_Notification_When_Email_Is_Valid()
        {
            Assert.True(validEmail.Valid);
            Assert.Equal(0, validEmail.Notifications.Count);
        }

        [Fact]
        public void Should_Return_Notification_When_Email_Is_Invalid()
        {
            Assert.False(invalidEmail.Valid);
            Assert.Equal(1, invalidEmail.Notifications.Count);
        }
    }
}
