export default function BlogPage({params}){
    const {id} = params;
    return (
        <div>
            The blog is: {id}
        </div>
    );
}