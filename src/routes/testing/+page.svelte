<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div>
  <h2>Testing <img style="width:30px;margin-bottom:-4px;margin-left:10px;" src="/svgs/apple.svg" alt="apple logo" /></h2>
  <p style="">
    These links will simulate the NFC tap interactions that the user would do to either create their account or collect
    an egg.
  </p>
  <p>Since these are deep links to the iBoopers app, you will need to have it on your device before clicking them.</p>

  <h2>Test account</h2>
  <p></p>
  <a href="iboopers://0xbooper?name=test&signature=t9Ai5BQ033klnLlz23vcIbwugIvP9xmrmH2fZsTPRJY%253D">
    Open in iBooper App as Test account
  </a>
  <p>
    The link above will login to the test account. Note that links creating real accounts can only be used once, the
    test account can be logged in an unlimited amount of times for testing purposes
  </p>

  <h2>Test eggs</h2>
  <p>The links below will simulate egg boops that will both collect an egg and attribute points. I will reset the eggs on the test account every evening</p>
  <div style="display:flex;flex-direction:column;gap:1rem;">
    <a href="iboopers://0xegg?bid=red-1&signature=5ZhRMjdDYmJFN7xNgqSdVpDmMZZXMgQzOcePdDQXus8%253D">
      Simulate a red egg boop
    </a>
    <a href="iboopers://0xegg?bid=blue-15&signature=iFzjiDabf7Taj3U1bJiKhiyv63LkavIic1%252BxTPCmcHk%253D">
      Simulate a blue egg boop
    </a>
    <a href="iboopers://0xegg?bid=green-16&signature=uDU6xbGEdy5HxygCvdxqiOQYp%252BFrfm3lhQX%252FSv4O8FQ%253D">
      Simulate a green egg boop
    </a>
    <a href="iboopers://0xegg?bid=yellow-17&signature=Gy%252B1OF4Hoa52QuqDAKUJAbONRFPfm232GK2U%252BqpGOew%253D">
      Simulate a yellow egg boop
    </a>
  </div>
</div>

<style>
  * {
    max-width: 800px;
  }
</style>
