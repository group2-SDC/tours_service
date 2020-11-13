// Outline of client components

// App
  // props:
    // listingId
  // state:
     // view (which tab is selected)
     // categories (start out with recommended and browse)
  // componentDidMount
    // fetchCategories(listingId)
    // for the top 4 categories and recommended
      // do appropriate fetch requests 
      // add tours to a tours property of that category
      // pass in as relevant props depending on view
    // for browse 
      // add the remaining categories
      // note: can start with up to 6 categories before see more
  // functions
    // fetchCategories(listingId)
    // fetchRecommendedTours(listingId)
    // fetchToursByCategory(listingId, categoryId)
    // updateFavoriteStatus(tourId, status)
    // updateView(newView)
    // handler for seeMore (show more tours - change props for num visible for tour display zone)

// Categories bar 
  // props:
    // categories
  // div with dynamically rendered spans (category headers) ('recommended, 'browse', top 4 categories in between)

// Category header
  // props:
    // info for particular category
  // state: 
    // selected (t/f)
  // to display
    // category name
    // category description 
    // (except browse, which is a little different)
  // functions
    // handleClick - if click, changes selected state, also triggers updateView on App, and passing down relevant props

// Tour display zone
  // props:
    // tours to display
  // div with dynamically rendered divs inside (based on props - num visible)

// Tour preview
  // props:
    // tour info
  // div
  // to display
    // image
    // tour title
    // tour avg rating/num reviews
    // tour price
    // more info button
    // quick view button (if hover)
    // heart component
    // popular flag (num of bookings)
  // functions
    // handleHover (if hover anywhere in div, show "quick view" component)

// Tour modal
  // props:
    // all associated tour information
  // to display
    // image
    // (map snippet?)
    // tour category
    // tour name
    // tour avg rating and reviews
    // tour company
    // price
    // more info button
    // description
    // free cancel/langs/evoucher/instant confirm/time/hotel pickup/etc with icons

// Category preview (for browse)
  // props:
    // category info
  // div 
  // to display
    // photo
    // title
    // description

// Heart
  // props: 
    // id of associated tour
    // updateFavoriteStatus
  // state: 
    // favorite t/f (updates color)
  // functions
    // handle click - triggers updateFavoriteStatus

// Quick view
  // props:
    // all associated tour information
  // functions
    // onClick - display modal