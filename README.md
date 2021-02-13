# Are We There Yet?

Web client for Deschtimes group status.

## Local Development

```sh
npm run dev
```

## Deploying the Application

You have multiple options to deploy the app.

### Deploying to Vercel

This is the recommended method.

1. Fork this repository.
2. [Login to Vercel](https://vercel.com/login). GitHub, GitLab, Bitbucket, and plain e-mail are all supported. Create a new project.
3. When asked about the directory containing the project source code, the default is fine, hit **Continue**.
4. Switch **FRAMEWORK PRESET** to `Svelte`.
5. Under **Build & Output Settings**:
    - Toggle _Override_ for `BUILD COMMAND` and set it to `npm run build:vercel`
    - Toggle _Override_ for `OUTPUT DIRECTORY` and set it to `build`
6. Under **Environment Variables**:
    - Set **NAME** to `TOKEN`
    - Set **VALUE** to your group token from Deschtimes
7. Click **Add** and then **Deploy**.
8. Under your newly made project, go to **Settings** > **Git**, and scroll down to **Deploy Hooks**.
9. Create a Hook with a descriptive name (`Deschtimes` is suggested) and type in `main` for your `Git Branch Name`, click **Create Hook**. **Copy** the newly added webhook URL and do not share it with anyone else.
10. Log in to Deschtimes and go to your Group page. Under **Webhooks**, click **Manage**.
11. Click **Add Webhook**. Use a descriptive name like `Vercel`, and paste the URL you obtained from step 9. Set the platform to **Vercel**, press **Create Webhook**.

Your application will be statically generated every time your group's projects are updated on Deschtimes.

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
 <!--
10. Under **Build & deploy**, scroll down to **Build hooks** and click **Add build hook**.
11. Set the name to something descriptive like `Deschtimes` and keep the branch to `main`. Hit save and copy the URL.
12. Log in to Deschtimes and go to your Group page. Under **Webhooks**, click **Manage**.
13. Click **Add Webhook**. Use a descriptive name like `Netlify`, and paste the URL you obtained from step 11. Change the platform to **Vercel**, press **Create Webhook**.
    -->

Your application will be _dynamically_ generated every time you recieve a request.

### Deploying on your own server

Advanced usage.

1. Clone this project.
2. Create a new `.env` file in the root directory of the project:

```env
TOKEN=your_token_from_deschtimes
```

3. Run the following commands

```sh
# Install dependencies
npm install

# Build the server
npm run build

# Start the server at a custom port, e.g. 8080
npx svelte-kit start -p 8080
```

Point your webserver at the application. The method will vary based on what you're running (e.g. Apache, nginx) and is out of the scope of this README.

Your application will be _dynamically_ generated every time you recieve a request.

## Wordpress HTML Widget

After deploying to one of the options above, open the `/config` page of your newly deployed application.

For example if your site is `https://blah-blah-1234.netlify.com`, then you should go to `https://blah-blah-1234.netlify.com/config` to configure your embed.

The configuration page contains a live preview of what various states of the application will look like, or you can also see what your specific group data will look like by clicking **Go to page**.

# License

Dual-licensed under either MIT license or Apache License (Version 2.0), under your convenience.
