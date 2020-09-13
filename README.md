<p align="center">
  <a href="https://solidjobs.org/">
    <img
      src="https://i.imgur.com/8UGkLzT.png"
      alt="SolidJobs logo" width="300" />
  </a>
</p>
<h1 align="center"><a href="https://solidjobs.org/">SolidJobs</a> - Open Source Panel</h1>

## Setting up development environment 🛠

```
git clone https://github.com/xxxxxxxxxxxxxxxxx .
npm install
ng serve
```

## Getting the user session token 🔐

* Open [`https://app.solidjobs.org/`](https://app.solidjobs.org/) in the browser
* Log in with your Google account
* Once inside, open the Developer Tools (F12)
* Go to the `Application` tab → `Storage` → `Local Storage`
* Select `https://app.solidjobs.org/`
* Copy the `session`'s key value


## Using the token in the development environment 🧪

* Now go to [`http://localhost:4200/`](http://localhost:4200/)
    (please note that this cannot be done from another port)
* Open the Developer Tools (F12)
* Go to the `Application` tab → `Storage` → `Local Storage`
* Select `http://localhost:4200/`
* Paste the code into the `session`'s key value field
* Your Open Source Panel should now be linked to `app.solidjobs.org`

## Developers ✨

<table>
  <tr>
    <td align="center"><a href="https://github.com/hanschrome"><img src="https://avatars0.githubusercontent.com/u/6317267?s=460&u=91598bd48b061718bb37e6412001e9465febc8a9&v=4" width="64px;"/><br /><sub><b>Hans Castro</b></sub></a><br /></td>
    <td align="center"><a href="https://twitter.com/AidaTrazos"><img src="https://pbs.twimg.com/profile_images/1150403764278517762/LVa_D3qs_400x400.png" width="64px;"/><br /><sub><b>Aida Puigdellivol</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/mel-caballero"><img src="https://avatars2.githubusercontent.com/u/24940188?s=460&u=e9c5de20d5101cc0e709ed04acdabc309f15a06f&v=4" width="64px;"/><br /><sub><b>Melanie Caballero</b></sub></a><br /></td>
</table>

## Contributors ✨

<table>
  <tr>
    <td align="center"><a href="https://github.com/madeinchema"><img src="https://avatars3.githubusercontent.com/u/26657998?s=460&u=dc589b8d7d0db1f26d1a1e4e3fbb39c1b096ebec&v=4" width="64px;" alt=""/><br /><sub><b>José Mª Verdú</b></sub></a><br /></td>
  </tr>
</table>

## Accessibility ♿

@todo hans

## License

SolidJobs Open Source Panel is [MIT licensed.](https://opensource.org/licenses/MIT)

