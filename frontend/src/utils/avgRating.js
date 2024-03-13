
const calculateAvgRating = reviews => {
    
    // Tính rating trung bình
    const totalRating = reviews?.reduce((acc,item) => acc + item.rating, 0)
    const avgRating = 
    totalRating === 0
    ? '' 
    : totalRating === 1
    ? totalRating
    // toFixed(1): làm tròn 1 chữ số
    : (totalRating / reviews?.length).toFixed(1); 

    return {
        totalRating,
        avgRating
    }
}

export default calculateAvgRating