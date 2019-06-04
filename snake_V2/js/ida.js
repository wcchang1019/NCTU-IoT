 $(function(){
        set_endpoint('http://iottalk2.tw:9992');
		set_PUSH_INTERVAL(500);  // unit: ms
		
        var profile = {
		    'dm_name': 'snake_0516094',          
                    'idf_list':[[Dummy_Sensor,['None']]],
		    'odf_list':[[snake_0516094,['None']]],			
		    //'u_name': 'your name'
        };
		
        function Dummy_Sensor(){
            return Math.random();
        }
		
        function snake_0516094(data){
            $('.ODF_value1')[0].innerText=data[0];
            $('.ODF_value2')[0].innerText=data[1];
        }
      
/*******************************************************************/                
        function ida_init(){console.log('Success.');}
        var ida = {
            'ida_init': ida_init,
        }; 
        dai(profile,ida);     
});
