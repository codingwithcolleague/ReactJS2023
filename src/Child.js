const Child = (props) =>{
    function my(){
      console.log("hei")
    }
    {my()}
  }

export default memo(Child)