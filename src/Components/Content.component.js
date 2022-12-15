
function ContentComponent({styles, children}) {
    return (
        <div style={styles}   className="border-5 w-full bg-white rounded-md border-gray-50 shadow-lg m-6 px-3 py-2">
            {children}
        </div>
    )
}

export default ContentComponent