import React from 'react'

const Zoha = () => {
  return (
    <div>
        <p>Zoha</p>

        <table className='w-full text-3xl bg-slate-500 '>
            <thead className='bg-green-600'>
                <tr className='text-white '>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                </tr>
            </thead>
            <tbody className='bg-slate-800'>

            <tr className='bg-slate-400'>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            </tbody>
            <tfoot className='bg-slate-600'>
                <tr className='text-white bg-black'>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
            </tfoot>
        </table>

    </div>
  )
}

export default Zoha