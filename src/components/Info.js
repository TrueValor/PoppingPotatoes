var reviewData = [
    {
        company:`The Food Network`,
        highlight: `The Best Restaurant in the city!`,
        author: `Tony Stark`,
        authorInfo: `Avenger`,
        review: `I've had some of the best dishes from all over the United States.
         I've tasted food from the most decorated chefs in the world. Nothing really
          compares to the food an drink here. Order anything on the menu and you're sure to have a full stomach and great time.`,
        id: 0,
    },
    {
        company:`Nightlife Magazine`,
        highlight: `Great Night time fun!`,
        author: `Tony Stark`,
        authorInfo: `Avenger`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elite
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat`,
        id: 1,
    },
    {
        company:`Resturant Reviewers`,
        highlight: `Best Food at the Best Prices`,
        author: `Tony Stark`,
        authorInfo: `Avenger`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elite
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat`,
        id: 2,
    },
    {
        company:`Hungry Hippos`,
        highlight: `Perfect for date night`,
        author: `Tony Stark`,
        authorInfo: `Avenger`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elite
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat`,
        id: 3,
    },
    {
        company:`The Gotham Times`,
        highlight: `Love it, Love it, Love it!!!`,
        author: `Tony Stark`,
        authorInfo: `Avenger`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elite
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat`,
        id: 4,
    }
]

function reviewLeftClick () {
    return (
        {
        InfoDump:{
        reviewStatus:{
            currentReview : InfoDump.reviewStatus.currentReview--
        }
    }}
    )
}

function reviewRightClick () {
    return (
        {
            InfoDump:{
        reviewStatus:{
            currentReview : InfoDump.reviewStatus.currentReview++
        }
    }}
    )
}

export const InfoDump = {
    count: 0,
    reviewData,
 
    reviewStatus:{
        currentReview: 0,
    } 
}

export const action = {
reviewLeftClick,
reviewRightClick
}
