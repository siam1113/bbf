# How set auth code validity time period

1. The speakEasy.totp.verify function automatically checks the validity of the TOTP code for the current time step as well as the previous and next time steps (depending on the window parameter). This means that a TOTP code can be considered valid for up to 90 seconds (30 seconds before and after the current time step).

2. If you want to change the validity period for a TOTP code, you can do so by changing the time step value. The time step value determines how often a new TOTP code is generated. For example, if you set the time step value to 60 seconds, a new TOTP code will be generated every minute and will be valid for one minute. You can set the time step value when you generate the TOTP secret using the speakEasy.generateSecret function. The speakEasy.generateSecret function takes an optional encoding parameter that specifies the time step value in seconds.

**Important**:<br>
If the time on the server and the client are not synchronized, the TOTP code may be considered invalid even if it is correct.
