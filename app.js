if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
 
function sayHello() {
    document.getElementById('hello').innerText = 'Hello world';
}

function Calculate()
        {
            const a = document.getElementById("a").value;
            const b = document.getElementById("b").value;
            const c = document.getElementById("c").value;

            let vysledek1;
            let vysledek2;

            let disc = (b * b) - (4*a*c);
            if (disc >= 0)
            {
                if (d = 0)
                {
                    vysledek1 = (-b) / (2*a);
                    vysledek2 = (-b) / (2*a);
                }
            
                vysledek1 = (-b+Math.sqrt(disc)) / (2*a*b);
                vysledek2 = (-b-Math.sqrt(disc)) / (2*a*b);
            }
            else 
            {
                vysledek1 = "nelze najit vysledek v poli realnych cisel!";
            }

            document.getElementById('x1').innerText = 
        }