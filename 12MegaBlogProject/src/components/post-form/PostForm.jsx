import React, {useCallback, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import service from '../../appwrite/service'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function PostForm({post}) {
    /* First we want some information from 'useForm()'.
        1.)watch -> it gives watching capabilities if we want a field to continuously monitor, then it is used
        2.)setValue -> it is used to set the values in form. Kyunki hum react hook form use kar rhe hai to value likhkar set nhi ki jati value, vaha par hum ye use karte hai.
        3.)control -> agar kisi aur form ka control ka chahiye to hum ye lete hai aur yhi control hum as it is "RTE" mei pass karenge, to vaha se jo bhi values hai, syntaxes hai aur controls hai vo hume yaha mil jayenge.
        4.)getValue -> agar form mei se value chahiye to hum iska use karte hai.
    
        Now hum useForm mei object bhi pass kar skte hai abhi hum default values pass karte hai.

        About default values :- Now first default values aayegi kaha se ye aayegi post se. First hume ek query lagani padegi ki user new post banana chahta hai ya purani value edit karna chahta hai.
        Kyunki agar new post banana chahta hai to fir to hume ye empty rakhni hai lekin agar existing post ko edit karna chahta hai fir hume default values deni padegi jo post mei pehle se hi hai, aur vo kaha se aayegi vo aayegi appwrite ke db se. 
    */
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || "active"
        }
    })
    
    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)

    // Handling logic for submit button click
    const submit = async (data) => {
        if (post) {
            // File handling 
            const file = data.image[0] ? await service.uploadFile(data.image[0]) : null

            // Deleting the existing file
            if (file) {
                service.deleteFile(post.featuredImage)
            }
            const dbPost = await service.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : post.featuredImage,
            });
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        }else {
            // Uploading file
            const file = data.image[0] ? await service.uploadFile(data.image[0]) : null
            if (file) {
                const fileId = file.$id
                data.featuredImage = fileId
                /* Yaha par hum 'data' aise directly pass nhi kar skte kya pata problem ho jaye isliye spread kar rhe hai */
                const dbPost = await service.createPost({
                    ...data,
                    userId: userData.$id
                })
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            } 
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, '-')
            .replace(/\s/g, '-')
        }
        return ''
    },[])

    // Implementing the above method
    useEffect(() => {
        /* This watch has also callback. Here we'll get name and value from form. Is 'name' mei pura form hi uth kar aayega kyunki agar yaad ho to hum register mei pehle usko spread kar rhe the fir value st kar rhe the isliye to fir hum check karenge ki jaha par title hoga vaha change kar do. */
        const subscription = watch((value,{name}) => {
            if (name === 'title') {
                /* To yaha par value kisme set karni hai vo to hai 'slug' aur konsi karni hai vo hai 'slugTransform()' function se jo value aayegi.
                Ab jo ye 'value' aayegi fun se vo ek object hai to vaha se hum title set karenge.
                Also 'setvalue()' mei 1 aur option pass karte skte hai jo ki object mei hi pass karenge, vo hai 'shouldValidate'. */
                setValue('slug', slugTransform(value.title, {shouldValidate: true}))
            }
        })

        /* To ye generally 1 interview question hai ki agar humne useEffect mei ek method liya hai to usko optimise kaise kare.
        So this is the answer ki pehle to usko 1 variable mei store kar lo aur fir useEffect mei return mei callback milta hai to usme variable par .unsubscribe method lagado, to isse hoga ye ki vo method baar baar hi call nhi hoga. So it will help im optimisation. */
        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    /* To yaha par jaise input karta jayega to vo watch karta rahega kyunki humne 'slugTransform()' mei watch laga hi rkha hai to ye continuously title field ko watch karta jayega aur value set karte jayega. */
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post?.featuredImage && (
                    <div className="w-full mb-4">
                        <img
                            src={service.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm
