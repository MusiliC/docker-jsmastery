
const Upload = () => {
  return (
<form className="max-w-lg mx-auto">
  <label className="block mb-2  font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload a file</label>
  <input className="block  w-full my-5 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
 
 <button className="p-3 rounded-md bg-blue-500 text-white" type="submit" >Submit</button>
</form>
  )
}

export default Upload