<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      left: 0px;
      background-color: blue;
      top: 0px;

    }
    50% {
      left: 25px;
      background-color: green;
      top: 50px;

    }
    100% {
      left: -25px;
      background-color: yellow;
      top: 0px;

    }
  }
</style>

<div id="rect"></div>