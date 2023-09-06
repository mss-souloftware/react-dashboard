import styles from './TableTwo.module.css';

const TableTwo = () => {
  return (
    <div className={`${styles.overflowAuto}`}>
      <div className={`border border-stroke bg-black shadow-default rounded-lg xsmmin-w-max ${styles.minwidthfit}`} >
        <div className="grid grid-cols-12 border-b text-white py-4.5 px-4 sm:grid-cols-12 md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">
              <input className="bg-transparent" type="checkbox" />
            </p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Name</p>
          </div>
          <div className="col-span-2 hidden items-center">
            <p className="font-medium">Mobile #</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Email</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Rating</p>
          </div>
          <div className="col-span-3 flex items-center">
            <p className="font-medium">Product</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Feedback</p>
          </div>
        </div>


        <div
          className="grid grid-cols-12 border-t text-white border-stroke py-4.5 px-4 sm:grid-cols-12 md:px-6 2xl:px-7.5"
        >
          <div className="col-span-1 flex items-center">
            <p className="font-medium">
              <input type="checkbox" />
            </p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Joseph Martinez</p>
          </div>
          <div className="col-span-2 hidden items-center">
            <p className="font-medium">+1 (555) 789-0123</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">xtaylor@aol.com</p>
          </div>
          <div className="col-span-2 flex items-center text-center">
            <p className="font-medium text-warning">8</p>
          </div>
          <div className="col-span-3 flex items-center">
            <p className="font-medium">Resturant Location</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">abcxyz@gmail.com</p>
          </div>
        </div>

        <div
          className="grid grid-cols-12 border-t text-white border-stroke py-4.5 px-4 sm:grid-cols-12 md:px-6 2xl:px-7.5"
        >
          <div className="col-span-1 flex items-center">
            <p className="font-medium">
              <input type="checkbox" />
            </p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Sarah Williams</p>
          </div>
          <div className="col-span-2 hidden items-center">
            <p className="font-medium">+1 (555) 789-0123</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">manderson@icloud.com</p>
          </div>
          <div className="col-span-2 flex items-center text-center">
            <p className="font-medium text-success">9</p>
          </div>
          <div className="col-span-3 flex items-center">
            <p className="font-medium">Classic Eggs</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">abcxyz@gmail.com</p>
          </div>
        </div>

        <div
          className="grid grid-cols-12 border-t text-white border-stroke py-4.5 px-4 sm:grid-cols-12 md:px-6 2xl:px-7.5"
        >
          <div className="col-span-1 flex items-center">
            <p className="font-medium">
              <input type="checkbox" />
            </p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Richard Thompson</p>
          </div>
          <div className="col-span-2 hidden items-center">
            <p className="font-medium">+1 (555) 789-0123</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">hcampbell@icloud.com</p>
          </div>
          <div className="col-span-2 flex items-center text-center">
            <p className="font-medium text-danger">4</p>
          </div>
          <div className="col-span-3 flex items-center">
            <p className="font-medium">Orange Juice</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">abcxyz@gmail.com</p>
          </div>
        </div>

        <div
          className="grid grid-cols-12 border-t text-white border-stroke py-4.5 px-4 sm:grid-cols-12 md:px-6 2xl:px-7.5"
        >
          <div className="col-span-1 flex items-center">
            <p className="font-medium">
              <input type="checkbox" />
            </p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Joseph Martinez</p>
          </div>
          <div className="col-span-2 hidden items-center">
            <p className="font-medium">+1 (555) 789-0123</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">xtaylor@aol.com</p>
          </div>
          <div className="col-span-2 flex items-center text-center">
            <p className="font-medium text-success">9</p>
          </div>
          <div className="col-span-3 flex items-center">
            <p className="font-medium">Resturant Location</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">abcxyz@gmail.com</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TableTwo;
