# Are We There Yet?

Web client for Deschtimes group status.

## Local Development

```
npm run dev
```

## Deploying the Application

You have multiple options to deploy the app.

### Deploying to Vercel

1. Login to Vercel to [Import a Third-Party Git Repository](https://vercel.com/login?next=%2Fnew%2Fgit%2Fthird-party). GitHub, GitLab, Bitbucket, and plain e-mail are all supported.
2. Enter the URL of this repository: `https://github.com/GrygrFlzr/are-we-there-yet`
3. Under **Build & Development Settings**:

    - Toggle _Override_ for `BUILD COMMAND` and set it to `npm run build:vercel`
    - Toggle _Override_ for `OUTPUT DIRECTORY` and set it to `build`

4. todo

### Deploying to Netlify

1. Fork this repository.
2. [Login to Netlify](https://app.netlify.com/signup). GitHub, GitLab, Bitbucket, and plain e-mail are all supported.
3. Under project type, select **Web Application** and **Get started**.
4. Connect to a Git provider.
5. Select your fork of this repository.
6. Under **Basic build settings**, click **Show advanced**.
7. Under **Advanced build settings**, click **New variable**.
8. Set **Key** to `TOKEN`. Set **Value** to your group token from Deschtimes.
9. **Deploy site**.

### Deploying on your own server

```sh
# Build the server
npm run build
# Start the server at a custom port, e.g. 8080
npx svelte-kit start -p 8080
```

Point your webserver at the application. The method will vary based on what you're running (e.g. Apache, nginx) and is out of the scope of this README.

## Wordpress HTML Widget

After deploying to one of the options above, adjust the following script.

Replace both instances of `http://localhost:4100` with your application (e.g. `https://blah-blah-1234.netlify.com`)

```html
<script>
    /**
     * Resize the iframe after page load
     */
    window.addEventListener(
        'message',
        function (event) {
            if (event.origin !== 'http://localhost:4100') {
                return;
            }

            const data = JSON.parse(event.data);
            const iframe = document.getElementById('areWeThereYet');
            if (data.action === 'resize') {
                iframe.height = data.height;
                iframe.style.opacity = '1';
            }
        },
        false
    );
</script>
<iframe
    id="areWeThereYet"
    src="http://localhost:4100"
    allowtransparency="true"
    frameborder="0"
    style="opacity: 0;"
></iframe>
```

# License

Dual-licensed under both MIT license and Apache License (Version 2.0), under your convenience.
