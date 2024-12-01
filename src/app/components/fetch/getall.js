export const getAllPosts=async()=>{
    const response=await fetch('http://localhost:5000/1')
    return response.json()
}