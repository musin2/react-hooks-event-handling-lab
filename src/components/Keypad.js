// Code Keypad Component Here

function Keypad (){
    function handler1(event) {
      console.log("Entering password...");
    }
    return (
      <div>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={handler1}
        />
      </div>
    );
}

export default Keypad;