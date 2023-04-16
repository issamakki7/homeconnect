import React from 'react';
import './Browse.css';
import House from "../House/House";
import img from '../video/house.jpg'
import paris from '../video/rome.jpg'
import brussels from '../video/brussels.jfif'
import munich from '../video/munich.jfif';
import salzburg from '../video/salzburg.jpg'
import bruges from '../video/bruges.jpg';

function Browse(){
    
    
    
    
    return(
        <div id='browse' className="card-wrap">
        <House
        website = "https://house7done.glitch.me/"
        img = {brussels}
        title="Brussels, Rue Belliard"
        description="A Rewarding Escape Peacefully Situated.
        Richly-appointed spaces include large gathering areas, a bright, professional-grade kitchen, and a
        spectacular dining room."
        maps = "https://earth.google.com/web/search/Rue+Belliard,+Brussels,+Belgium/@50.8409617,4.375834,121.17281705a,637.70418657d,35y,0h,45t,0r/data=CooBGmASWgolMHg0N2MzYzQ5YmZjZDg1Y2Q3OjB4NWQ3MmY1MTVkZTczZDlkNBkjWAuipGtJQCFD5sqg2oARQCofUnVlIEJlbGxpYXJkLCBCcnVzc2VscywgQmVsZ2l1bRgCIAEiJgokCc7MN5z3nUlAEVt8fk8KnElAGS2BMMLb8AlAIWpghbDWwwlAKAI"
        />
        
 
        
        <House
        website = "https://completehousedone.glitch.me/"
        img = {paris}
        title="Paris, Rue Oberkampf"
        description="
        This 3 Bedroom W/ 2 Full Bathroom Ranch Home Is Immaculate & Full Of Upgrades!
        Enjoy The Open Floor Plan With Vaulted 15ft Ceilings & Large Windows Throughout."
        maps = "https://earth.google.com/web/search/Rue+Oberkampf,+Paris,+France/@48.8651138,2.3749388,-420a,666.51931241d,35y,0h,45t,0r/data=CocBGl0SVwolMHg0N2U2NmRmYjM4ZDMyNjMzOjB4YjZlNTkwNWI1YjNjYzBlNRm9KIsMvG5IQCEKA-Dp3_8CQCocUnVlIE9iZXJrYW1wZiwgUGFyaXMsIEZyYW5jZRgCIAEiJgokCcCoK6Dx9ERAEeCE5RGE80RAGQcQEWJpFSlAIeeMStqMDClAKAI"
        />
        
        <House
        website = "https://roomdone.glitch.me/"
        img = {munich}
        title="Munich, Feldmoching"
        description="
        Stunning large late 80’s contemporary home with soaring ceilings and windows. Great floor plan including
        open dining and living room. Located in the beautiful urban and vibrant section of Munich."
        maps = "https://earth.google.com/web/search/Feldmoching-Hasenbergl,+Munich,+Germany/@48.21911485,11.5213047,1255.57967093a,12391.2854913d,35y,0h,0t,0r/data=CpIBGmgSYgolMHg0NzllNzZjZjk5ZTllODMxOjB4ZDJkYTdkMmY0NTUzM2NhNBnSPaGNEhtIQCEh4oubvwYnQConRmVsZG1vY2hpbmctSGFzZW5iZXJnbCwgTXVuaWNoLCBHZXJtYW55GAIgASImCiQJv0HiMSdvSEARCfTcvc1tSEAZdEDGzLcLA0AhMys8w03nAkA"
        
        />
        
        <House
        website = "https://house4done.glitch.me/"
        img = {salzburg}
        title="Salzburg, Kajetanerplatz"
        description="
        Excellent home superbly located right off Kajetanerplatz, with an excellent view to Salzburger Dom!
        3 bedrooms, 2 baths, with a covered back patio."
        maps = "https://earth.google.com/web/search/Kajetanerplatz,+Salzburg,+Austria/@47.7969677,13.0518031,3455.24882279a,681.8139147d,35y,0h,45t,0r/data=CowBGmISXAolMHg0Nzc2OTA4YmI5MGI1NjE1OjB4ZWY3ZjhiNDk3OTJmZjY3Mxnyu58JA-ZHQCGvqZjvhRoqQCohS2FqZXRhbmVycGxhdHosIFNhbHpidXJnLCBBdXN0cmlhGAIgASImCiQJWNoXiLcgSEARIVe1g1wXSEAZgiIZWalGJ0AhsN4djSfPJkAoAg"
        
        />


    <House
        website = "https://housee9done.glitch.me/"
        img = {img}
        title="Rome, Tiburtina 32"
        description="Boasting an array of sleek finishes and a thoughtful open plan layout, this immaculate 4-bedroom,
        2-bathroom home is a paradigm of contemporary Italian living "
        maps = "https://earth.google.com/web/search/Tiburtina,+Circonvallazione+Nomentana,+Rome,+Metropolitan+City+of+Rome,+Italy/@41.9100762,12.5302643,3005.32381702a,762.16004607d,35y,0h,45t,0r/data=CroBGo8BEogBCiUweDEzMmY2M2VkMWY5MmVhZGQ6MHgyNGMyMWZmNWVmODg2ZjczGRnvfWB99ERAIQB5Zc1-DylAKk1UaWJ1cnRpbmEsIENpcmNvbnZhbGxhemlvbmUgTm9tZW50YW5hLCBSb21lLCBNZXRyb3BvbGl0YW4gQ2l0eSBvZiBSb21lLCBJdGFseRgCIAEiJgokCenH9n8RbElAEemQwiOvaklAGaJtpFyEjRFAIdscN0z4ehFAKAI"
        />
        
        <House
        website = "https://house9done.glitch.me/"
        img = {bruges}
        title="Bruges, Sint Jozef St."
        description="Features of this 531 sq. ft. home include wide
        plank engineered hardwood floors, huge Pella windows with western exposure, and
        central heating and cooling, and a convenient washer/dryer hook-up."
        maps = "https://earth.google.com/web/search/Sint-Jozef,+Bruges,+Belgium/@51.22900924,3.22803773,9.26168504a,923.33779992d,35y,122.46318944h,44.98601168t,-0r/data=CoYBGlwSVgolMHg0N2MzNTczYzUyNTc2YTRiOjB4ZWFmYmEzZGVmMTE0ZTFkYxl4khkUcp1JQCHDbLh-sNIJQCobU2ludC1Kb3plZiwgQnJ1Z2VzLCBCZWxnaXVtGAIgASImCiQJXAgKDTv_M0ARWwgKDTv_M8AZpBqt7TKJ5z8hmofeCKUpWcA"
        />
        
        
        </div>
        
        
        )
        
        
        
        
        
        
        
        
        
    }
    
    
    
    export default Browse;
    