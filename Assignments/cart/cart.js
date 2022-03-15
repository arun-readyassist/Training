let x=0;
let y=0;
       
        function sub1()
        {
        

        if(x<=0)
        {
            
        }
        else
        {
            x--;
            document.getElementById('vbbox').value = x;
        }
        
        }
        function add1()
        {
         

        if(x>=5)
        {
        alert("cannot add more");
        }
        else
        {
            x++;
            document.getElementById('vbbox').value = x;
        }
        }

        function sub2()
        {
        

        if(y<=0)
        {
            
        }
        else
        {
            y--;
            console.log(y);
            document.getElementById('padbox').value = y;
        }
        
        }
        function add2()
        {
         

        if(y>=5)
        {
        alert("cannot add more");
        }
        else
        {
            y++;
            console.log(y);
            document.getElementById('padbox').value = y;
        }
        }

        function total(d)
        {

            let vb=2400,pump = 1200;

            let subtotal;
            let discount;
        if(d===true)
        {    

            subtotal= x*vb+y*pump;
            discount= (subtotal/100)*3;
            subtotal = (subtotal/100)*97;

        }

        else
        {

            alert("enter a valid vpoucher")
            subtotal = x*vb+y*pump;
            discount = 0;
        }
        
        document.getElementById('st').innerHTML = subtotal;
        document.getElementById('dc').innerHTML = discount;

        let total = subtotal + (subtotal*18)/100;

        document.getElementById('t').innerHTML = total.toFixed(2);


        }

        function remove1()
        {
            x=0;
            document.getElementById('vbbox').value=x;
        
        }

        function remove2()
        {
            y=0;
            document.getElementById('padbox').value=y;
        
        }


        function redirect()
        {
            
            let c = document.getElementById('t').value;
            
            if(c!=0)
            location.href="thank.html";
            else
            alert("Add atleast an item to the cart")
        
        }

       function promo()
       {
            let p= document.getElementById('promoid').value;

            switch(p)
            {
                case 'cdef' :
                case 'ab12' :
                case 'a123' :
                case 'abcd' : total(true);
                break;

                default :total(false);
            }
       }