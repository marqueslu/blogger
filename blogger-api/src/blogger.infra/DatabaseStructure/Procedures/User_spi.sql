CREATE PROCEDURE USER_SPI
	@Id UNIQUEIDENTIFIER,
	@FirstName VARCHAR(40),
	@LastName VARCHAR(40),
	@Email VARCHAR(200),
	@Password VARCHAR(MAX),
	@Active BIT,
	@Administrator BIT
AS
	INSERT INTO [User](
		Id,
		FirstName,
		LastName,
		Email,
		Password,
		Active,
		Administrator
	) VALUES (
		@Id,
		@FirstName,
		@LastName,
		@Email,
		@Password,
		@Active,
		@Administrator
	);