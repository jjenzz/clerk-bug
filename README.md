### Steps to reproduce

1. run `pnpm dev`
2. create an account
3. close browser window
4. open a **private** browser window to ensure no cookies (and browser extensions) exist
5. log in with your account
6. open developer console

### Expected behaviour

Every 3 seconds we should see a successful (200) response from the `/test` endpoint.

### Actual behaviour

Every 3 seconds we see a failed (404) response from the `/test` endpoint.

### Video demo

https://github.com/user-attachments/assets/8b668912-bcb3-445d-8b72-0937b1cf3968
