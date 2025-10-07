const {test, expect} = require('@playwright/test');
var userId
//  fullyParallel: false - Needs to be set in config file to run tests in sequence
test('Get users', async ({request}) => {

    await request.get('https://reqres.in/api/users?page=2').then(async response => {
        expect(response.status()).toBe(200);
        const respBody = JSON.parse(await response.text());
        console.log(respBody);
        expect(respBody.page).toBe(2);
        expect(respBody.data.length).toBe(6);
    });
    
});

test('Post/Create user', async ({request}) => {
   const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Qa", 
            "job": "test"
        },
        headers: {
            'Accept': 'application/json'
        }
    })

    console.log(await response.json());
    expect(response.status()).toBe(201);

    var res=await response.json();
    userId=res.id;
    console.log(userId);
});

test('Put/Update user', async ({request}) => {

    const response = await request.put(`https://reqres.in/api/users/${userId}`, {
        data: {
            "name": "Jerry", 
            "job": "SDET"
        },
        headers: {
            'Accept': 'application/json'
        }
    })

    console.log(await response.json());
    expect(response.status()).toBe(200);

});


test('Delete user', async ({request}) => {
    const response = await request.delete(`https://reqres.in/api/users/${userId}`, {
        headers: {
            'Accept': 'application/json'
        }
    })      
    expect(response.status()).toBe(204);    

    
});
    
 

