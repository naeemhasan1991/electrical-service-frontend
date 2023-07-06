<script>
    import {submitOrder} from '$lib/sanity';

    let showSuccess = false;
    let name = '';
    let phone = '';
    let email = '';
    let message = '';

    async function submitForm() {
        console.log('contact submitted');
        
        // console.log('name', name);
        // console.log('phone', phone);
        // console.log('email', email);
        // console.log('message', message);

        // obj = {
        //     data :{
        //         name,
        //         phone,
        //         email,
        //         message
        //     }
        // }

        // const req = await fetch('http://localhost:1337/api/contacts', {
        //     method: "POST",
        //     headers: {
        //         "Accept":       "application/json",
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(obj)
        // });
            
        // const res = await req.json();

        // console.log('res', res);
        // if(res?.statusCode === 200){
        //     showSuccess = true;
        // }else{
        //     console.log('something went wrong');
        // }
    }
</script>

<form class="contact-form" action="">
    <div class="grid grid-rows-1 md:grid-cols-3 gap-8">
        <div class="fields">
            <label class="label" for="">Name</label>
            <input class="input h-10 2xl:h-12" type="text" placeholder="Ex. John Doe" bind:value={name}>
        </div>
        <div class="fields">
            <label class="label" for="">Email</label>
            <input class="input h-10 2xl:h-12" type="email" placeholder="Ex. abc@email.com" bind:value={email}>
        </div>
        <div class="fields">
            <label class="label" for="">Phone</label>
            <input class="input h-10 2xl:h-12" type="tel" placeholder="Ex. +12345678" bind:value={phone}>
        </div>
    </div>
    <div class="fields my-4 2xl:my-8">
        <label class="label" for="">Message</label>
        <input class="input h-full" placeholder="Enter your message here" type="text" bind:value={message}>
    </div>
    <button class="px-4 py-3 bg-black text-lg text-white font-semibold" on:click={submitOrder}>Send Message</button>
</form>

<style>
    
    .contact-form {
        @apply w-full text-center;
    }
    .fields{
        @apply flex flex-col items-start justify-center;
    }

    .label {
        @apply text-primary font-semibold text-lg mb-3;
    }

    .input {
        @apply flex w-full rounded-lg bg-light text-lg border-black px-3 py-4;
    }

</style>